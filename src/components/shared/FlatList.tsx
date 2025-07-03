import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Text, RefreshControl, StyleSheet } from "react-native";
import { FlatListComponentProps } from "../../@types";
import { request as requestInstance } from "../../repository/request";
import Loader from "./Loader";

const FlatListComponent = <T,>({
  keyExtractor,
  renderItem,
  // refreshing = false,
  // onEndReached,
  style,
  route,
  method,
  noDataComp
}: FlatListComponentProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<{ footer: boolean, header: boolean, content: boolean }>({
    footer: false,
    header: false,
    content: false,
  });
  const [pagination, setPagination] = useState<{ page: number; limit: number; pageCount: number }>({ page: 1, limit: 5, pageCount: 0 })
  const [request] = useState(requestInstance(route, method));
  const onEndReached = () => {
    if (data.length && pagination.page < pagination.pageCount)
      setPagination(p => ({ ...p, page: p.page + 1 }))
  }

  useEffect(() => {
    const loaderKey = pagination.page === 1 ? 'content' : 'loader';
    setLoading(p => ({ ...p, [loaderKey]: true }));
    request
      .setParams({ page: pagination.page, limit: pagination.limit })
      .onSuccess((response) => {
        setLoading(p => ({ ...p, [loaderKey]: false }));
        if (pagination.page === 1) setData(response.data);
        else setData(p => [...p, ...response.data]);
        setPagination(p => ({ ...p, pageCount: response.pagination.pageCount }));
        // console.log('response', data[data.length - 1]);
      })
      .onFailure(() => setLoading(p => ({ ...p, [loaderKey]: false })))
      .call();
  }, [pagination.page]);

  return (
    loading.content ?
      <Loader />
      :
      data.length ?
        <FlatList
          data={data}
          style={style}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={loading.header} onRefresh={() => setPagination(p => ({ ...p, page: 1 }))} />}
          onEndReached={onEndReached}
          ListEmptyComponent={<Text style={styles.emptyText}>No data available</Text>}
          ListFooterComponent={loading.footer ? <ActivityIndicator size="large" color="blue" /> : null}
        />
        :
        (noDataComp ?? null)
  );
};

// Styles
const styles = StyleSheet.create({
  emptyText: { textAlign: "center", padding: 20, color: "gray" },
});

export default FlatListComponent;
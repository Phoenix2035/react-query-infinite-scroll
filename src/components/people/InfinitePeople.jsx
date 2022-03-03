import InfiniteScroll from "react-infinite-scroller"
import { useInfiniteQuery } from "react-query"
import ReactLoading from 'react-loading';


import { Person } from "./Person"

const initialUrl = "https://swapi.dev/api/people/"

const fetchUrl = async (url) => {
    const response = await fetch(url);
    return response.json();
};

export function InfinitePeople() {
    const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery(
        "sw-people",
        ({ pageParam = initialUrl }) => fetchUrl(pageParam),
        { getNextPageParam: (lastPage) => lastPage.next || undefined },
    )

    if (isLoading) return <div className="loading"><ReactLoading type="spinningBubbles" color="#111" /></div>
    if (isError) return <div className="loading">Error! {error.toString()}</div>

    return (
        <>
            {
                isFetching && <div className="loading"><ReactLoading type="spinningBubbles" color="#111" /></div>
            }
            <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
                {
                    data.pages.map(pageData =>
                        pageData.results.map(item =>
                            <Person {...item} key={item.name} />
                        )
                    )
                }
            </InfiniteScroll>
        </>
    )

}

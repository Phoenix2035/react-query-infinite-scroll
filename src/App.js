import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { InfinitePeople } from "./components/people/InfinitePeople"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <h1>Infinite People</h1>
                <InfinitePeople />

                <ReactQueryDevtools position="bottom-right" />
            </div>
        </QueryClientProvider>
    );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { RQParralelQueriesPage } from "./components/RQParallelQueries.page";
import { DynamicPArallelPage } from "./components/DynamicParallel.page";
import { DepedentQueriesPage } from "./components/DepedentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueryesPage } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/rq-infinite">
              <InfiniteQueryesPage />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-depedent">
              <DepedentQueriesPage email="vishwas@example.com" />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicPArallelPage heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-parallel">
              <RQParralelQueriesPage />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHeroPage />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

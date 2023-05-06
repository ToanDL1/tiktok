import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes/routes';
import DefaultLayOut from '~/components/Layout/DefaultLayout/DefaultLayout';
import '~/fontawasome.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Layout = publicRoute.layout || DefaultLayOut;
                    const Page = publicRoute.component;
                    console.log('layout:', Layout);
                    return (
                        <Route
                            key={index}
                            path={publicRoute.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

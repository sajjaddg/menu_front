"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import { FilterProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";

function Providers({ children }: React.PropsWithChildren) {
    const [client] = React.useState(
        new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
    );

    return (
        <QueryClientProvider client={client}>
            <FilterProvider>
                <CartProvider>
                    <SkeletonTheme direction="rtl" enableAnimation={true} borderRadius={2} baseColor='#A9AFB0' highlightColor='#D5D8D9' width={100} height={100}>
                        {children}
                    </SkeletonTheme>
                </CartProvider>
            </FilterProvider>
        </QueryClientProvider>
    );
}

export default Providers;
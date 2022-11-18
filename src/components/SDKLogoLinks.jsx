import React from 'react';

export default function SDKLogoLinks() {
    const sdks = [
        { name: "C", path: "/docs/integrate-into-your-codebase/c-host-sdk", logo: "/img/sdk-languages/c.svg" },
        { name: "C++", path: "/docs/integrate-into-your-codebase/cpp-host-sdk", logo: "/img/sdk-languages/cpp.svg" },
        { name: "Elixir", path: "/docs/integrate-into-your-codebase/elixir-or-erlang-host-sdk", logo: "/img/sdk-languages/elixir.svg" },
        { name: "Erlang", path: "/docs/integrate-into-your-codebase/elixir-or-erlang-host-sdk", logo: "/img/sdk-languages/erlang.svg" },
        { name: "Go", path: "/docs/integrate-into-your-codebase/go-host-sdk", logo: "/img/sdk-languages/go.svg" },
        { name: "Haskell", path: "/docs/integrate-into-your-codebase/haskell-host-sdk", logo: "/img/sdk-languages/haskell.svg" },
        { name: "Node", path: "/docs/integrate-into-your-codebase/node-host-sdk", logo: "/img/sdk-languages/node.svg" },
        { name: "OCaml", path: "/docs/integrate-into-your-codebase/ocaml-host-sdk", logo: "/img/sdk-languages/ocaml.svg" },
        { name: "PHP", path: "/docs/integrate-into-your-codebase/php-host-sdk", logo: "/img/sdk-languages/php.svg" },
        { name: "Python", path: "/docs/integrate-into-your-codebase/python-host-sdk", logo: "/img/sdk-languages/python.svg" },
        { name: "Ruby", path: "/docs/integrate-into-your-codebase/ruby-host-sdk", logo: "/img/sdk-languages/ruby.svg" },
        { name: "Rust", path: "/docs/integrate-into-your-codebase/rust-host-sdk", logo: "/img/sdk-languages/rust.svg" },
    ]

    return (
        <ul>
            {sdks.map((sdk, i) => {
                return (
                    <li key={i}>
                        <a href={sdk.path}>
                            <img src={sdk.logo} alt={sdk.name} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
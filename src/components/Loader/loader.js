import React from 'react';

export default function EosIconsThreeDotsLoading(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 24 24" {...props}>
        <circle cx={18} cy={12} r={0} fill="#8b57c6">
            <animate attributeName="r" begin="0.168s" calcMode="spline" dur="0.375s"
                     keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                     values="0;2;0;0"></animate>
        </circle>
        <circle cx={12} cy={12} r={0} fill="#8b57c6">
            <animate attributeName="r" begin="0.083s" calcMode="spline" dur="0.375s"
                     keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                     values="0;2;0;0"></animate>
        </circle>
        <circle cx={6} cy={12} r={0} fill="#8b57c6">
            <animate attributeName="r" begin={0} calcMode="spline" dur="0.375s"
                     keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                     values="0;2;0;0"></animate>
        </circle>
    </svg>);
}
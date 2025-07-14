import React from "react";

export default function GreenBenchmarksLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`greenbenchmarks-logo ${className}`}>
      <div className="greenbenchmarks-logo-main">
        <span className="greenbenchmarks-logo-green">green</span>
        <span className="greenbenchmarks-logo-benchmarks">benchmarks</span>
      </div>
      <div className="greenbenchmarks-logo-byline self-end mr-2">
        <span className="greenbenchmarks-logo-by">by:</span>
        <span className="greenbenchmarks-logo-by-green">green</span>
        <span className="greenbenchmarks-logo-by-cloud">Cloud</span>
      </div>
    </div>
  );
}
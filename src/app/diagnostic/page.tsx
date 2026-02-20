"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function DiagnosticContent() {
    const searchParams = useSearchParams();
    const urlParam = searchParams.get('url') || 'your website';

    return (
        <div className="max-w-3xl w-full z-10 space-y-8">

            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Critical Performance Warning
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Mobile Diagnostic Report
                </h1>
                <p className="text-xl text-neutral-400">
                    Target: <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">{urlParam}</span>
                </p>
            </div>

            <div className="bg-[#111113] border border-white/10 rounded-2xl p-8 space-y-8 relative shadow-2xl">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/50 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-red-500 mb-1">4.2s</div>
                        <div className="text-sm text-neutral-400">Mobile Load Time</div>
                    </div>
                    <div className="bg-black/50 border border-orange-500/20 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-1">41/100</div>
                        <div className="text-sm text-neutral-400">Core Web Vitals</div>
                    </div>
                    <div className="bg-black/50 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-red-500 mb-1">High</div>
                        <div className="text-sm text-neutral-400">Traffic Bleed Risk</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">Analysis</h3>
                    <p className="text-neutral-300 leading-relaxed">
                        Your mobile experience is actively causing prospects to bounce. Google penalizes sites that take longer than 2.5 seconds to load on mobile devices, which pushes you down in local search results.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        In highly competitive local service markets, a single lost lead costs thousands of dollars. The primary issue appears to be your current server architecture and unoptimized asset delivery.
                    </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 space-y-2">
                            <h4 className="text-lg font-bold text-white">The Immediate Fix</h4>
                            <p className="text-sm text-blue-200">
                                Migrating your landing pages to a high-speed, conversion-optimized platform guarantees a 90+ Core Web Vitals score.
                            </p>
                        </div>
                        {/* THE CLICKBANK AFFILIATE LINK HOOK */}
                        <Link
                            href="/out/instadoodle"
                            target="_blank"
                            className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                        >
                            Upgrade Architecture
                        </Link>
                    </div>
                </div>

            </div>

            <p className="text-center text-xs text-neutral-600 font-mono">
                Generated {new Date().toLocaleDateString()} • System: HPE-Scout/4.5
            </p>
        </div>
    );
}

export default function DiagnosticReport() {
    return (
        <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col items-center justify-center p-4 py-20 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Suspense fallback={<div className="text-neutral-500 animate-pulse">Running diagnostic protocols...</div>}>
                <DiagnosticContent />
            </Suspense>
        </div>
    );
}

"use client";

import * as LucideIcons from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ReactNode } from "react";
import React from "react";

import { Assets } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface IconProps {
    name: string;
    type?: "icon" | "image" | "svg";
    displayAssetProps?: {
        altText?: string;
        size?: number | string;
        width?: number;
        height?: number;
        priority?: boolean;
        color?: string;
    };
    className?: string;
    fallback?: ReactNode;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
    const {
        name,
        displayAssetProps,
        fallback,
        className,
        type = "image",
    } = props;

    if (type === "icon") {
        const IconComponent = (LucideIcons as any)[name as string];
        if (IconComponent) {
            return (
                <IconComponent
                    className={cn(className)}
                    color={displayAssetProps?.color}
                />
            );
        }
        return fallback ? <>{fallback}</> : null;
    }

    if (type === "svg") {
        const svgPath = Assets[name as keyof typeof Assets];
        if (svgPath) {
            return (
                <div
                    className={cn(className)}
                    style={{
                        width: displayAssetProps?.width ?? 88,
                        height: displayAssetProps?.height ?? 88,
                        maskImage: `url(${svgPath.src})`,
                        WebkitMaskImage: `url(${svgPath.src})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        backgroundColor: displayAssetProps?.color || 'currentColor',
                    }}
                />
            );
        }
        return fallback ? <>{fallback}</> : null;
    }

    if (type === "image") {
        const imagePath: StaticImageData | undefined =
            Assets[name as keyof typeof Assets];

        if (imagePath) {
            return (
                <Image
                    src={imagePath}
                    alt={displayAssetProps?.altText ?? ""}
                    width={displayAssetProps?.width ?? 88}
                    height={displayAssetProps?.height ?? 88}
                    className={cn(className)}
                    priority={displayAssetProps?.priority ?? false}
                />
            );
        }
        if (fallback) {
            return <>{fallback}</>;
        }
        return null;
    }
});

Icon.displayName = "Icon";

export default Icon;
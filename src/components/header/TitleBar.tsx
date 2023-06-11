"use client";
import { getProfile } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image'
import { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export default function TitleBar() {
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["profile"],
        queryFn: () => getProfile(),
    })

    const loading = useMemo(() => isLoading || isFetching, [isFetching, isLoading])

    return (
        <div className="flex flex-row items-center gap-2">
            {
                loading ?<Skeleton width={48} height={48} circle={true}/> :
                    <div className="rounded-full w-12 h-12 bg-slate-500">
                        <Image
                            src="/profile.png"
                            width={80}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
            }
            <p className="font-shabnamBold text-base text-additional-1">
                {
                    loading ? <Skeleton height={14} /> : `به ${data?.name} خوش آمدید!`
                }
            </p>
        </div>
    )
}


'use client';

import Link from "next/link";
import {Tag} from "antd";

export default function Page() {
    return (
        <>
            <Link href='/next-page'>Go to the next page</Link>
            <Tag>test</Tag>
        </>
    );
}
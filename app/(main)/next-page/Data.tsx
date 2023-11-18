'use client';

import { Tag, Typography } from 'antd';

export function Data() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Typography.Title level={5}>Supposed to be green</Typography.Title>
            <Tag color='success'>Tag content</Tag>
        </main>
    );
}

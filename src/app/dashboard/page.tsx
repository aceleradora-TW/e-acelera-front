'use client';
import { UpperBanner } from '@/components/UI/dashboard/upper-banner';
import { TableDashboard, mockColumns, mockRows } from '@/components/UI/dashboard/table-dashboard';
import { useState } from 'react';

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState<"theme" | "topic" | "exercise" | "video">("theme");

  return (
    <div>
      <UpperBanner 
        title="Dashboard"
        createButton={true}
        showBreadCrumb={false}
        menuBanner={true}
      />
      <TableDashboard
        columns={mockColumns}
        rows={mockRows.filter(row => row.type === selectedTab)} 
      />
    </div>
  );
}
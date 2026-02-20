import { TableDashboard, mockColumns, mockRows } from "@/components/UI/dashboard/table-dashboard"
import { UpperBanner } from "@/components/UI/dashboard/upper-banner"

export default function RenderCmsPage() {
    return (
          <>
          <UpperBanner title="CMS" menuBanner createButton />
          <TableDashboard columns={mockColumns} rows={mockRows} />
          </>
    )
}
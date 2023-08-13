import AuthenticationPage  from './examples/authentication/page'
import DashboardPage from "@/app/examples/dashboard/page"


export default function IndexPage() {
  return (
    <div className="container relative">
      <section className="hidden md:block">
  
        <AuthenticationPage />
        <div className="overflow-hidden rounded-lg border bg-background shadow">
        </div>
      </section>
    </div>
    
  )
}

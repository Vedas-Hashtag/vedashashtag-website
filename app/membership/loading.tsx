import { Skeleton } from "@/components/ui/skeleton";

export default function MembershipSkeleton() {
  return (
    <section className="flex justify-center items-center flex-col p-8 md:p-16 space-y-6 min-w-screen">
      <Skeleton className="h-16 w-3/5" />
      <div className="space-y-4 grid w-4/5">
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="grid grid-cols-1">
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-12 w-32 mx-auto" />
      </div>
    </section>
  );
}

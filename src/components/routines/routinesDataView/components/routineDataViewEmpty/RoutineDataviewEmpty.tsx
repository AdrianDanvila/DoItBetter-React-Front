import SleepingIcon from '@/assets/sleeping-stroke-rounded'
import ZzzIcon from '@/assets/zzz-stroke-rounded'

export const RoutineDataViewEmpty = () => (
  <div className="w-full h-[70vh]  items-center justify-center text-center flex flex-col gap-4 bg-slate-100 rounded-lg">
    <div className="flex gap-2">
      <SleepingIcon />
      <ZzzIcon />
    </div>

    <h1 className="font-verbatim">no records found</h1>
  </div>
)

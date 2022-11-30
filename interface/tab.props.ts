export interface ITabProps {
    tab: string[]
    setSelectedTab: (tab: string) => void
    className?: string
    selectTab?: string
    textClassName?: string
}
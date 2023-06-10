import { useCallback } from 'react'
import { BottomSheet } from "react-spring-bottom-sheet"
import SortPickerItem from "./SortPickerItem"
import { useFilter } from "@/utils/Context/FilterContext"

const SortPicker = () => {
    const { isOpenSortPicker, setIsOpenSortPicker } = useFilter()
    const onDismiss = useCallback(() => setIsOpenSortPicker(false), [setIsOpenSortPicker])

    return (
        <BottomSheet open={isOpenSortPicker}{...{ onDismiss }}>
            <SortPickerItem />
        </BottomSheet>
    )
}

export default SortPicker
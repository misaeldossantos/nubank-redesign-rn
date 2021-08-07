import {useLocalObservable} from "mobx-react";
import {Extrapolate, interpolate} from "react-native-reanimated";

export default function useAdjustLimitCtrl({ usedAmount, limitAmount }) {
    const ctrl = useLocalObservable(() => {
        const adjustedPerc = 40;
        const usedPerc = (100 * usedAmount) / limitAmount
        return {
            adjustedPerc,
            markPoints: new Array(10).fill(0).map((_, index) => {
                return {
                    perc: (index + 1) * 10,
                    amount: limitAmount * (index + 1) / 10
                }
            }),
            initialYValue: interpolate(adjustedPerc, [usedPerc, 100], [0, -400], Extrapolate.CLAMP),
            initialAdjustedAmount: limitAmount * (adjustedPerc / 100),
            usedPerc,
            setAdjustedPerc(value) {
                ctrl.adjustedPerc = value
            },
            get adjustedAmount() {
                return limitAmount * (ctrl.adjustedPerc / 100)
            },
            get availableAmount() {
                return ctrl.adjustedAmount - usedAmount
            },
            get adjustAmountIsLimit() {
                return ctrl.adjustedAmount === limitAmount
            },
            get hasAvailableAmount() {
                return ctrl.availableAmount > 0
            }
        }
    })

    return ctrl
}
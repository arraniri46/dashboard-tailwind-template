import { Key } from 'react'

export function availabilityStatusColor(status: Key) {
    switch (true) {
        case status === 'available':
            return 'primary'
        case status === 'on-rental':
            return 'danger'
        case status === 'staff-driven':
            return 'success'
        case status === 'open-contract':
            return 'warning'
        default:
            return 'secondary'
    }
}

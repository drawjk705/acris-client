export const formatDollarAmount = (amount: string | null) =>
    amount === null
        ? null
        : `$${Intl.NumberFormat('en-US').format(Number.parseInt(amount))}`;

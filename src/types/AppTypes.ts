export type TransactionType = { description: string; amount: number }

export type GlobalContextPropType = {
    children: any;
}

export type GlobalContextPartailType = {
    transactionListState: TransactionType[];
    addTransaction: (transaction: TransactionType) => void;
    deleteTransaction: (index: number) => void;
}
// export type TransactionList = {
//     array Transaction[]
// }

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Expense } from "../../models/expense";


@Component({
    selector: 'app-expense-item',
    imports: [],
    templateUrl:'./expense-item.html'
})
export class ExpenseItemComponent{
    @Input() expense!: Expense;
    @Output() delete = new EventEmitter<string>();

    deleteExpense() {
        this.delete.emit(this.expense.id);
    }
}
import { Component, Input } from "@angular/core";
import { Expense } from "../../models/expense";


@Component({
    selector: 'app-expense-item',
    imports: [],
    templateUrl:'./expense-item.html'
})
export class ExpenseItemComponent{
    @Input() expense!: Expense;
}
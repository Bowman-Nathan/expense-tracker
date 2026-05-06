import { Component } from "@angular/core";
import { ExpenseService } from "../../services/expense-service";

@Component({
    selector: 'app-expense-list',
    imports:[],
    templateUrl: './expense-list.html'
})
export class ExpenseListComponent{
    constructor(public expenseService: ExpenseService) {}
}
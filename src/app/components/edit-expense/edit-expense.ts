import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ExpenseService } from "../../services/expense-service";
import { ExpenseCategory } from "../../models/expense";

@Component({
    selector: 'app-edit-expense',
    imports: [FormsModule],
    templateUrl: './edit-expense.html'
})

export class EditExpenseComponent {
    id = '';
    title = '';
    amount= 0;
    category: ExpenseCategory='Personal';

    constructor(
        public expenseService: ExpenseService,
        private route: ActivatedRoute
    ) {
        this.id = this.route.snapshot.paramMap.get('id') || '';

        const expense = this.expenseService.getExpenseById(this.id);

        if(expense) {
            this.title = expense.title;
            this.amount = expense.amount;
            this.category = expense.category;
        }
    }
}
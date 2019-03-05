function bankAccount(first, last, middle, status){
    this.firstName = first
    this.lastName = last
    this.middleName = middle
    this.accountType = ""
    this.balance = 0
    this.status = status
}


bankAccount.prototype.openAccount = function(firstDeposit, type){
    this.accountType = type
    this.balance = this.balance + firstDeposit
    if(firstDeposit >= 100)
        console.log("Your " + this.accountType + " account is open and your balance is " + this.balance)
    else 
        console.log("I'm sorry, you don't have enough to open an account.")
}
bankAccount.prototype.checkBalance = function(){
    console.log("Your balance is " + this.balance)
}

bankAccount.prototype.deposit = function(deposit){
    this.balance = this.balance + deposit
    console.log("Your new balance is " + this.balance)
}

bankAccount.prototype.withdraw = function(withdrawal){
    if(withdrawal >= this.balance){
        this.balance = this.balance - (withdrawal + 35)
        console.log("You have overdrafted your account.  Your new balance is " + this.balance)
    }
    else {
        this.balance = this.balance - withdrawal
        console.log("Your new account balance is " + this.balance)
    }
}

bankAccount.prototype.transfer = function(amount, type){
    if(type == 'savings'){
        account2.balance = account2.balance - amount
        account1.balance = account1.balance + amount
        console.log("Your new checking account balance is " + account2.balance)
        console.log("Your new savings account balance is " + account1.balance)
    }
    else if(type == 'checking'){
        account2.balance = account2.balance + amount
        account1.balance = account1.balance - amount
        console.log("Your new checking account balance is " + account2.balance)
        console.log("Your new savings account balance is " + account1.balance)
    }

}

let account1 = new bankAccount
account1.openAccount(100, 'savings')
account1.deposit(500)
account1.deposit(250)


let account2 = new bankAccount
account2.openAccount(100, 'checking')
account2.deposit(500)
account2.deposit(1000)

account1.transfer(300, 'checking')
account2.transfer(500, 'savings')

account1.checkBalance()
account2.checkBalance()




class Account{
  readonly id: number;
  owner: string; 
  private _balance: number;

  constructor(id: number, owner: string, balance: number){
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if(amount <= 0){
      throw new Error("Invalid amount")
    }
     this._balance += amount
  }

  getBalance(): number{
    return this._balance
  }

}


let account = new Account(1, "mosh", 9)
account.deposit(10)

console.log(account instanceof Account)
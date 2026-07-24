import { Page } from '@playwright/test';

export class loginPage
{
constructor(private page:Page){
}

username(){
  return this.page.getByPlaceholder("Username");

}

password(){
  return this.page.getByPlaceholder("Password");

}

loginButton(){
    return this.page.getByRole("button",{name:"Login"});

}

async login(user:string,pass:string){

     await this.username().fill(user);
     await this.password().fill(pass);
     await this.loginButton().click();

}


}
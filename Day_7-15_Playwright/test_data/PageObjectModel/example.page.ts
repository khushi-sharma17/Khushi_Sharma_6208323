class Example {
    usernameTF : string
    password : string
    SubmitBtn : any

    constructor(page) {
        this.usernameTF = page.locator("#username")
    }
    
}
export default Example
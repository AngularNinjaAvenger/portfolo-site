
class GetAccess{
    browserSize(){
        let body = document.getElementsByTagName("html")[0];
        return [body.clientHeight,body.clientWidth];
    }
}
export let access = new GetAccess();
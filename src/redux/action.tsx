export const updateCodeSnippet = function(data: string){
    return {
    type : 'change-of-code-snippet',
        payload : data
    }
}
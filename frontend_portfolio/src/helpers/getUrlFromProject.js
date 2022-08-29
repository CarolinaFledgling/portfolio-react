import { getImageBuilder } from '../../src/client';

function getUrlFromProject(project) {
    try {
        let url = getImageBuilder(project?.imgUrl).height(220).width(400).url();
        return url;
    } catch (error) {
        console.log('Somthing is wrong with url, ', error);
        return undefined;
    }
}


export default getUrlFromProject
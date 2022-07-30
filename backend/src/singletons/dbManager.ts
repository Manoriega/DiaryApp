import DbManager from '../classes/database';

const dbManager = (() => {
    /**
     * @type manager
     */
    let singletonManager: DbManager;
    return {
        getManager: () => {
            if(singletonManager == null){ 
                singletonManager = new DbManager();
            }
            return singletonManager; 
        }
    }
})();
export default dbManager;
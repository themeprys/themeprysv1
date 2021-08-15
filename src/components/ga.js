import { uid } from 'quasar'
import axios from 'axios'
import { Cookies } from 'quasar'

export default {

    logEvent(category, action, label, value) {

        axios.get('https://www.google-analytics.com/collect', {
            params: {
                v: 1,
                tid: 'UA-48545613-1',
                ds: 'website', // If this is a website, use 'website'
                t: 'event',
                cid: this.getCid(),
                ec: category,
                ea: action,
                el: label,
                ev: value,
                an: 'Pryspry.com Personal Site', // If not given, this event is not shown in Real-Time view
                aid: 'com.pryspry.app',
                av: 'v1.0',
            }
        });
    },

    logPage(path, name) {

        axios.get('https://www.google-analytics.com/collect', {
            params: {
                v: 1,
                tid: 'UA-48545613-1',
                ds: 'website',
                t: 'pageview',
                cid: this.getCid(),
                dl: path,
                an: 'Pryspry.com Personal Site', // If not given, this event is not shown in Real-Time view
                aid: 'com.pryspry.app',
                av: 'v1.0',
            }
        });
    },

    getCid() {
        // We need an unique identifier for this session
        // We store it in a localStorage, but you may use cookies, too
        if (!Cookies.cid) {
            Cookies.cid = uid();
        }
        return Cookies.cid;
    }

}
import React, { PureComponent } from 'react';
import inject from './../registry/inject-service'


const delayLoad = ms => new Promise(resolve => setTimeout(() => resolve()), ms);

const asyncPage = ({ getCompnent, injectService = undefined, delay = 0 }) =>
    class AsyncPage extends PureComponent {

        static Component = null;

        state = {
            component:
                AsyncPage.Component
        }

        async componentDidMount() {

            if (!AsyncPage.Component) {
                try {
                    const component = await getCompnent();
                    await this._getService(component)
                }
                catch (e) { console.error('async load page is failed', e) }
            }
        }

        _getService = async (component) => {
            try {
                if (!injectService) return;
                const { reducer, sagas } = await injectService();

                inject(reducer, sagas)


                await delayLoad(delay);

            } catch (e) { console.error('async load service is failed'); throw e; }
            finally {
                this.setState({ component: component.default ? component.default : component },
                    () => { AsyncPage.Component = this.state.component })
            }


        }

        render() {


            const { component: Component } = this.state;
            return Component !== null ? <Component /> : <div>loading page</div>
        }
    }



export default asyncPage;
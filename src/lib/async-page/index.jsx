import React, { PureComponent } from 'react';
import propTypes from 'prop-types'
import serviceRegistry from './../registry/service-registry'


const delayLoad = ms => new Promise(resolve => setTimeout(() => resolve()), ms);

const asyncPage = ({
    getCompnent,
    service = undefined,
    delay = 0
}) => class AsyncPage extends PureComponent {

        static contextTypes = {
            store: propTypes.shape({
                dispatch: propTypes.func.isRequired,
            }),
        };

        static Component = null;


        state = {
            component: AsyncPage.Component,
            services: null
        }

        componentDidCatch() {
            this.setState({
                component: <div>Somthing goes wrong</div>
            })
        }

        _getService = async (component) => {

            try {
                const { reducer: { reducer, reducerName }, sagas } = await service();
                serviceRegistry.registerReducer(reducerName, reducer);
                serviceRegistry.registerSaga(reducerName, sagas)

                await delayLoad(delay);

            } catch (e) {
                console.error('async load service failed', e)
                throw e;
            }
            finally {
                this.setState({ component: component.default ? component.default : component },
                    () => {
                        AsyncPage.Component = this.state.component
                    })

            }


        }



        async componentWillMount() {

            let component = null;
            if (!AsyncPage.Component) {

                try {
                    const component = await getCompnent();

                    await this._getService(component)

                }
                catch (e) {
                    console.error('async load page is failed', e)
                }


            }
        }


        render() {
            const { component: Component } = this.state;
           

            return Component !== null ? <Component /> : <div>loading page</div>
        }
    }



export default asyncPage;
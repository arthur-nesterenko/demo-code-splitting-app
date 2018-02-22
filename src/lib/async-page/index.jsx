import React, { PureComponent } from 'react';

const asyncPage = ({
    getCompnent
}) => class AsyncPage extends PureComponent {

        state = {
            component: null
        }

        async componentWillMount() {
            try {

                const component = await getCompnent();
                this.setState({ component: component.default ? component.default : component })

            } catch (e) {
                console.log('error', e)
            }
        }


        render() {
            const { component: Component } = this.state;

            return Component !== null ? <Component /> : <div>loading page</div>
        }
    }



export default asyncPage;
import navBarList from '../components/navbar/nav-list.components';
import buttonComponent from '../components/shared/button.components';
import figureComponent from '../components/shared/figure.components';
import titleComponent from '../components/shared/title.components';

function appHeaderLayout() {
    return `
        <nav class="app__header navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <!-- CUSTOM -->
                <a class="navbar-brand" href="#">
                    ${figureComponent({
                        assetName: 'logo.png',
                    })}
                </a>
                <!-- END OF CUSTOM -->

                <!-- BUTTON TO ACCESS MENU -->
                ${buttonComponent({
                    bootstrapped: true,
                    targetElementId: '#hidden-menu',
                    toggleElementId: 'offcanvas',
                    classNames: 'navbar-toggler',
                    ariaControlsElementId: 'hidden-menu',
                    ariaLabel: 'toggle navigation',
                    content: '<span class="navbar-toggler-icon"></span>',
                })}

                <!-- END BUTTON TO ACCESS MENU -->

                <div class="offcanvas offcanvas-end" tabindex="-1" id="hidden-menu" aria-labelledby="hidden-menu-label-id">
                    <div class="offcanvas-header">
                        ${titleComponent({
                            hType: 'h5',
                            content: 'Navigation',
                            classNames: 'offcanvas-title',
                            id: 'hidden-menu-label-id',
                        })}

                        
                        <!-- BUTTON TO CLOSE THE NAVIGATION MENU WHEN OPEN -->
                   
                        ${buttonComponent({
                            bootstrapped: true,
                            classNames: 'btn-close',
                            dismissElementId: 'offcanvas',
                            ariaLabel: 'close',
                        })}
                        
                        <!-- END OF BUTTON TO CLOSE THE NAVIGATION MENU WHEN OPEN -->

                    </div>
                    <div class="offcanvas-body">
                        ${navBarList({ id: 'app-header-navbar-list' })}     
                    </div>
                </div>
            </div>
        </nav>
        
        `;
}

export default appHeaderLayout;

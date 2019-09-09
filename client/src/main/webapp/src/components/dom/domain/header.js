import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../../../store.js';

// These are the actions needed by this element.
import {
    navigate,
    updateOffline,
    updateDrawerState,
    updateLayout
} from '../../../actions/app.js';
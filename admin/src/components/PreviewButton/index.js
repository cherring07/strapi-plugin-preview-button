import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Button } from '@strapi/design-system';
import { ExternalLink } from '@strapi/icons';

import { PREVIEW_WINDOW_NAME } from '../../constants';
import { getTrad } from '../../utils';

const PreviewButton = ( { isDraft, url } ) => {
  const { formatMessage } = useIntl();

  const handleClick = event => {
    if ( ! url ) {
      event.preventDefault();
      return;
    }

    window.open( url, PREVIEW_WINDOW_NAME );
  };

  return (
    <Button
      onClick={ handleClick }
      size="S"
      startIcon={ <ExternalLink /> }
      variant="secondary"
      style={ { width: '100%' } }
    >
      { formatMessage( isDraft ? {
        id: getTrad( 'label.draft' ),
        defaultMessage: 'Open draft preview',
      } : {
        id: getTrad( 'label.published' ),
        defaultMessage: 'Open live view',
      } ) }
    </Button>
  );
};

PreviewButton.propTypes = {
  isDraft: PropTypes.bool,
  url: PropTypes.string,
};

export default memo( PreviewButton );

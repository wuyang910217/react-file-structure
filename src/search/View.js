import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';
import Error from './Error';

const View = ({
  loading,
  error,
  data,
  initialQuery,
  onLoad,
  RenderSearchInput,
  RenderImage,
  RenderLoading,
  RenderError
}) => (
  <div>
    <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad} />
    <section>
      {loading && <RenderLoading />}
      {error && <RenderError />}
      {!loading && <RenderImage src={data} />}
    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  initialQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  RenderImage: PropTypes.func,
  RenderLoading: PropTypes.func,
  RenderError: PropTypes.func
};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderImage: Image,
  RenderError: Error
};

export default View;

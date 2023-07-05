import React from "react";

import { useSelector } from "react-redux";
import {
    getProfessionById,
    getProfessionLoadingStatus
} from "../../store/profession";
import PropTypes from "prop-types";

const Profession = ({ id }) => {
    const isLoading = useSelector(getProfessionLoadingStatus());
    const prof = useSelector(getProfessionById(id));

    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "Loading...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;

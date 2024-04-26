import moment from "moment";
import React, { useState } from "react";

const RoomSearch = () => {
  const [searchQuery, setSearchQuery] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const checkIn = moment(searchQuery.checkInDate);
    const checkOut = moment(searchQuery.checkOutDate);
    if (!checkIn.isValid() || !checkOut.isValid()) {
      setErrorMessage("Please, enter valid date range");
      return errorMessage;
    }
    if (!checkOut.isSameOrAfter(checkIn)) {
      setErrorMessage("Check-In Date must come before Check-Out Date");
    }
  };
  return <div>RoomSearch</div>;
};

export default RoomSearch;

import React, { useState, useEffect } from "react";

const initialFriends = [
  { name: "Sanvi", amount: 70 },
  { name: "Surya", amount: -180 },
  { name: "Ajay", amount: 10 },
  { name: "Rajeshwari", amount: 1500 },
];

function EatndSplit() {
  const frdsdata = localStorage.getItem("frdsdata")
    ? JSON.parse(localStorage.getItem("frdsdata"))
    : initialFriends;

  const [friends, setFriends] = useState(frdsdata);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("You");
  const [newFriendName, setNewFriendName] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);

  useEffect(() => {
    localStorage.setItem("frdsdata", JSON.stringify(friends));
  }, [friends]);

  function handleSelectFriend(index) {
    setSelectedFriend(friends[index]);
  }

  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill || !expense || isNaN(bill) || isNaN(expense)) {
      return alert("Please enter valid bill and expense values.");
    }

    if (expense > bill) {
      return alert("Your expense cannot be greater than the total bill.");
    }

    const friendExpense = bill - expense;

    const updatedFriends = friends.map((friend) => {
      if (friend.name === selectedFriend.name) {
        let updatedAmount = selectedFriend.amount;

        if (payer === "You") {
          updatedAmount += friendExpense;
        } else {
          updatedAmount -= expense;
        }

        return { ...friend, amount: updatedAmount };
      }
      return friend;
    });

    setFriends(updatedFriends);
    setBill("");
    setExpense("");
    setPayer("You");
    setSelectedFriend(null);
  }

  function handleAddFriend(e) {
    e.preventDefault();

    if (!newFriendName.trim()) {
      return alert("Friend name cannot be empty!");
    }

    const newFriend = { name: newFriendName.trim(), amount: 0 };
    setFriends([...friends, newFriend]);
    setShowAddFriend(false);
    setNewFriendName("");
  }

  function handleRemoveFriend(name) {
    const confirmed = window.confirm(`Are you sure you want to remove ${name}?`);
    if (!confirmed) return;

    const updatedFriends = friends.filter((friend) => friend.name !== name);
    setFriends(updatedFriends);

    
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-danger">
        Have Food 🍽, Pay 💰, then Split ❌
      </h2>

      <div className="row">
        
        <div className="col-md-6">
          <div className="list-group">
            {friends.map((friend, index) => (
              <div
                key={friend.name}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <i className="fa fa-user faa-info"></i>
                <div>
                  <h4><b>{friend.name}</b></h4>
                  {friend.amount < 0 ? (
                    <p>You owe {friend.name} ₹{-friend.amount}</p>
                  ) : (
                    <p>{friend.name} owes you ₹{friend.amount}</p>
                  )}
                </div>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleSelectFriend(index)}
                  >
                    Select
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemoveFriend(friend.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {selectedFriend && (
          <div className="col-md-6">
            <div className="card p-3 mb-4">
              <h5 className="card-title">
                Split a Bill With <b>{selectedFriend.name}</b>
              </h5>
              <form onSubmit={handleSplitBill}>
                <div className="mb-3">
                  <label className="form-label">Bill Value</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Total Bill"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Expense</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Your share"
                    value={expense}
                    onChange={(e) => setExpense(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Remaining Balance</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={bill - expense || ""}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Who paid the bill?</label>
                  <select
                    className="form-control"
                    value={payer}
                    onChange={(e) => setPayer(e.target.value)}
                  >
                    <option value="You">You</option>
                    <option value="Friend">Friend</option>
                  </select>
                </div>

                <button className="btn btn-success me-2">Split Bill</button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedFriend(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      
      <div className="row mt-3">
        <div className="col-md-4">
          {showAddFriend && (
            <form onSubmit={handleAddFriend} className="mb-3">
              <input
                type="text"
                placeholder="Enter name"
                className="form-control mb-2"
                value={newFriendName}
                onChange={(e) => setNewFriendName(e.target.value)}
              />
              <button className="btn btn-outline-dark">Add Friend</button>
            </form>
          )}
          <button
            className="btn btn-outline-warning"
            onClick={() => setShowAddFriend(!showAddFriend)}
          >
            {showAddFriend ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EatndSplit;

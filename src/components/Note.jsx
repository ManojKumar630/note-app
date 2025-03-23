import React, { useState, useEffect } from "react";

export default function Note({ id, title, content, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  // Update state when props change
  useEffect(() => {
    setEditTitle(title);
    setEditContent(content);
  }, [title, content]);

  function handleSave() {
    onEdit(id, editTitle, editContent);
    setIsEdit(false);
  }

  function handleCancel() {
    setEditTitle(title);
    setEditContent(content);
    setIsEdit(false);
  }

  return (
    <div className="note">
      {isEdit ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
       
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="btn-container">
            <button className="edit-btn" onClick={() => setIsEdit(true)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
          </div>
          
        </>
      )}
    </div>
  );
}

def replace_in_list(my_list, idx, element):
    """Replace an element at a specified index in a list with a new element.
    
    Args:
    - my_list: The list in which the element will be replaced.
    - idx: The index of the element to be replaced.
    - element: The new element to insert at the specified index.
    
    Returns:
    - The updated list.
    """
    
    # Ensure the index is within the valid range
    if idx < 0 or idx >= len(my_list):
        return my_list
    
    my_list[idx] = element
    return my_list


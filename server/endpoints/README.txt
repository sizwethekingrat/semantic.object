we map objects:

root PUT    List<Field>       -> searches for subset or lists all objects   -> returns List<Root>
root GET    String             -> retrieves object                           -> returns Root
root POST   List<Field>       -> create new object                          -> returns Root
root DELETE String             -> deletes object                             -> returns Root

event GET                     -> evaluates                                  -> returns Field (for static or derived data)
event POST  Event             -> invokes the action with parameters         -> returns Root

field GET                     -> retrieves value from queue                   -> returns Field
field POST  Field             -> writes field to queue                        -> returns Root
field DELETE                  -> writes empty field to queue                  -> returns Root

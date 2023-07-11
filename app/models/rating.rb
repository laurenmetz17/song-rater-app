class Rating < ApplicationRecord
    belongs_to :song 
    belongs_to :listener 

    def listener_name
        return self.listener.name
    end
end
